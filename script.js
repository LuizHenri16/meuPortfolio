 (function () {
    if (!('commandForElement' in HTMLButtonElement.prototype)) {
      document.addEventListener('click', function (e) {
        var btn = e.target.closest('button[commandfor]');
        if (!btn) return;
        var target = document.getElementById(btn.getAttribute('commandfor'));
        if (!target || !(target instanceof HTMLDialogElement)) return;
        var cmd = btn.getAttribute('command');
        if (cmd === 'show-modal') target.showModal();
        else if (cmd === 'close') target.close();
      });
    }
 
    if (!CSS.supports('animation-timeline: scroll()')) {
      var root = document.documentElement;
      var update = function () {
        var p = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.55), 0), 1);
        root.style.setProperty('--hero-p', p);
      };
      window.addEventListener('scroll', update, { passive: true });
      update();
    }

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      document.querySelectorAll('dialog.modal').forEach(function (dlg) {
        dlg.addEventListener('click', function (e) {
          if (e.target !== dlg) return; 
          var r = dlg.getBoundingClientRect();
          var inside = e.clientX >= r.left && e.clientX <= r.right &&
                       e.clientY >= r.top && e.clientY <= r.bottom;
          if (!inside) dlg.close();
        });
      });
    }

    var backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      var isVisible = false;
      var syncBackToTop = function () {
        var shouldShow = window.scrollY > 360;
        if (shouldShow === isVisible) return;
        isVisible = shouldShow;
        backToTop.classList.toggle('back-to-top--visible', shouldShow);
        backToTop.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
        backToTop.setAttribute('tabindex', shouldShow ? '0' : '-1');
      };

      window.addEventListener('scroll', syncBackToTop, { passive: true });
      syncBackToTop();

      backToTop.addEventListener('click', function () {
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({
          top: 0,
          behavior: reduced ? 'auto' : 'smooth'
        });
      });
    }

    var themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      var getStoredTheme = function () {
        try {
          var saved = localStorage.getItem('theme');
          return saved === 'dark' || saved === 'light' ? saved : null;
        } catch (e) {
          return null;
        }
      };

      var applyTheme = function (theme, persist) {
        var isDark = theme === 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
        themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        var label = isDark ? 'Ativar tema claro' : 'Ativar tema escuro';
        themeToggle.setAttribute('aria-label', label);
        themeToggle.setAttribute('data-label', isDark ? 'Tema claro' : 'Tema escuro');
        themeToggle.removeAttribute('title');
        if (persist) {
          try {
            localStorage.setItem('theme', theme);
          } catch (e) {}
        }
      };

      var currentTheme = document.documentElement.getAttribute('data-theme') ||
        getStoredTheme() ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      applyTheme(currentTheme, false);

      themeToggle.addEventListener('click', function () {
        var active = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(active === 'dark' ? 'light' : 'dark', true);
      });

      var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery && mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', function (e) {
          if (!getStoredTheme()) {
            applyTheme(e.matches ? 'dark' : 'light', false);
          }
        });
      }
    }

    var searchInput = document.getElementById('project-search');
    var clearSearchBtn = document.querySelector('.project-search__clear');
    var projectsToolbar = document.querySelector('.projects-toolbar');
    var projectTrack = document.querySelector('.project-list');
    var projectCards = document.querySelectorAll('.project-list .project');
    var projectTabs = document.querySelectorAll('.project-tab');
    var prevProjectBtn = document.querySelector('.projects-nav__prev');
    var nextProjectBtn = document.querySelector('.projects-nav__next');
    var projectsCounter = document.querySelector('.projects-counter');
    var emptyState = document.querySelector('.projects-empty');
    var emptyQueryEl = document.querySelector('.projects-empty__query');
    var resetSearchBtn = document.querySelector('.projects-empty__reset');

    if (projectTrack && projectCards.length) {
      var normalizeText = function (text) {
        return text
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .trim();
      };

      var pad2 = function (num) {
        return num < 10 ? '0' + num : String(num);
      };

      var indexedProjects = Array.prototype.map.call(projectCards, function (card, index) {
        var title = card.querySelector('h3');
        var stack = card.querySelector('.project-stack');
        return {
          index: index,
          card: card,
          tab: projectTabs[index] || null,
          searchable: normalizeText((title ? title.textContent : '') + ' ' + (stack ? stack.textContent : ''))
        };
      });

      var activeVisiblePos = 0;

      var getVisibleItems = function () {
        return indexedProjects.filter(function (item) {
          return !item.card.hidden;
        });
      };

      var syncShowcaseUI = function (visiblePos) {
        var visibleItems = getVisibleItems();
        var total = visibleItems.length;

        if (total === 0) {
          if (projectsToolbar) projectsToolbar.hidden = true;
          projectTrack.hidden = true;
          return;
        }

        if (projectsToolbar) projectsToolbar.hidden = false;
        projectTrack.hidden = false;

        activeVisiblePos = Math.max(0, Math.min(visiblePos, total - 1));
        var activeItem = visibleItems[activeVisiblePos];

        indexedProjects.forEach(function (item) {
          if (!item.tab) return;
          var isSelected = item === activeItem;
          item.tab.classList.toggle('is-active', isSelected);
          item.tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        });

        if (projectsCounter) {
          projectsCounter.textContent = pad2(activeVisiblePos + 1) + ' / ' + pad2(total);
        }
        if (prevProjectBtn) prevProjectBtn.disabled = activeVisiblePos <= 0;
        if (nextProjectBtn) nextProjectBtn.disabled = activeVisiblePos >= total - 1;
      };

      var scrollToVisibleIndex = function (visiblePos, instant) {
        var visibleItems = getVisibleItems();
        if (!visibleItems.length) return;
        var clamped = Math.max(0, Math.min(visiblePos, visibleItems.length - 1));
        var targetCard = visibleItems[clamped].card;
        var reduced = instant || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        projectTrack.scrollTo({
          left: targetCard.offsetLeft,
          behavior: reduced ? 'auto' : 'smooth'
        });
        syncShowcaseUI(clamped);
      };

      indexedProjects.forEach(function (item) {
        if (!item.tab) return;
        item.tab.addEventListener('click', function () {
          var visibleItems = getVisibleItems();
          var pos = visibleItems.indexOf(item);
          if (pos !== -1) scrollToVisibleIndex(pos, false);
        });
      });

      if (prevProjectBtn) {
        prevProjectBtn.addEventListener('click', function () {
          scrollToVisibleIndex(activeVisiblePos - 1, false);
        });
      }

      if (nextProjectBtn) {
        nextProjectBtn.addEventListener('click', function () {
          scrollToVisibleIndex(activeVisiblePos + 1, false);
        });
      }

      var scrollRaf = 0;
      projectTrack.addEventListener('scroll', function () {
        if (scrollRaf) return;
        scrollRaf = window.requestAnimationFrame(function () {
          scrollRaf = 0;
          var visibleItems = getVisibleItems();
          if (!visibleItems.length) return;
          var currentLeft = projectTrack.scrollLeft;
          var closestPos = 0;
          var minDist = Infinity;
          visibleItems.forEach(function (item, pos) {
            var dist = Math.abs(item.card.offsetLeft - currentLeft);
            if (dist < minDist) {
              minDist = dist;
              closestPos = pos;
            }
          });
          syncShowcaseUI(closestPos);
        });
      }, { passive: true });

      if (projectsToolbar) {
        projectsToolbar.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            scrollToVisibleIndex(activeVisiblePos + 1, false);
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            scrollToVisibleIndex(activeVisiblePos - 1, false);
          }
        });
      }

      var filterProjects = function () {
        var rawQuery = searchInput ? searchInput.value.trim() : '';
        var query = normalizeText(rawQuery);
        var tokens = query ? query.split(/\s+/) : [];
        var visibleCount = 0;

        indexedProjects.forEach(function (item) {
          var matches = tokens.every(function (token) {
            return item.searchable.indexOf(token) !== -1;
          });
          item.card.hidden = !matches;
          if (item.tab) item.tab.hidden = !matches;
          if (matches) visibleCount += 1;
        });

        if (clearSearchBtn) {
          clearSearchBtn.hidden = rawQuery.length === 0;
        }

        if (emptyState && emptyQueryEl) {
          emptyState.hidden = visibleCount > 0;
          emptyQueryEl.textContent = '“' + rawQuery + '”';
        }

        scrollToVisibleIndex(0, true);
      };

      var resetSearch = function () {
        if (!searchInput) return;
        searchInput.value = '';
        filterProjects();
        searchInput.focus();
      };

      if (searchInput) searchInput.addEventListener('input', filterProjects);
      if (clearSearchBtn) clearSearchBtn.addEventListener('click', resetSearch);
      if (resetSearchBtn) resetSearchBtn.addEventListener('click', resetSearch);

      syncShowcaseUI(0);
    }

    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var revealTargets = document.querySelectorAll('main > section, .site-footer');
      if (revealTargets.length) {
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var pendingTargets = [];

        revealTargets.forEach(function (el) {
          el.classList.add('reveal');
          var rect = el.getBoundingClientRect();
          if (rect.top < viewportHeight * 0.92) {
            el.classList.add('is-visible');
          } else {
            pendingTargets.push(el);
          }
        });

        document.documentElement.classList.add('reveal-ready');

        if (pendingTargets.length) {
          var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            });
          }, {
            root: null,
            rootMargin: '0px 0px -48px 0px',
            threshold: 0.02
          });

          pendingTargets.forEach(function (el) {
            revealObserver.observe(el);
          });
        }
      }
    }

    var progressFill = document.querySelector('.reading-progress__fill');
    if (progressFill) {
      var progressRaf = 0;
      var updateReadingProgress = function () {
        progressRaf = 0;
        var doc = document.documentElement;
        var maxScroll = doc.scrollHeight - window.innerHeight;
        var ratio = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
        progressFill.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
      };

      var scheduleReadingProgress = function () {
        if (progressRaf) return;
        progressRaf = window.requestAnimationFrame(updateReadingProgress);
      };

      window.addEventListener('scroll', scheduleReadingProgress, { passive: true });
      window.addEventListener('resize', scheduleReadingProgress, { passive: true });
      updateReadingProgress();
    }

    var mapPins = document.querySelectorAll('.map-pin');
    var locationItems = document.querySelectorAll('.location-item');
    var mapCoords = document.querySelector('.map-card__coords');

    if (mapPins.length && locationItems.length) {
      var selectLocation = function (id, targetItem) {
        var activeCoords = '';
        var matchedFirstItem = false;

        mapPins.forEach(function (pin) {
          var isMatch = pin.getAttribute('data-location') === id;
          pin.classList.toggle('is-active', isMatch);
          pin.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
          if (isMatch && pin.getAttribute('data-coords')) {
            activeCoords = pin.getAttribute('data-coords');
          }
        });

        locationItems.forEach(function (item) {
          var isMatch = targetItem
            ? item === targetItem
            : (!matchedFirstItem && item.getAttribute('data-location') === id);
          if (isMatch) matchedFirstItem = true;
          item.classList.toggle('is-active', isMatch);
          item.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
          if (isMatch && item.getAttribute('data-coords')) {
            activeCoords = item.getAttribute('data-coords');
          }
        });

        if (mapCoords && activeCoords) {
          mapCoords.textContent = activeCoords;
        }
      };

      mapPins.forEach(function (pin) {
        var id = pin.getAttribute('data-location');
        pin.addEventListener('click', function () {
          selectLocation(id, null);
        });
        pin.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectLocation(id, null);
          }
        });
      });

      locationItems.forEach(function (item) {
        var id = item.getAttribute('data-location');
        item.addEventListener('click', function () {
          selectLocation(id, item);
        });
      });
    }

    var skillItems = document.querySelectorAll('.skill-item');
    if (skillItems.length) {
      var positionSkillTooltip = function (item) {
        var tooltip = item.querySelector('.skill-tooltip');
        var trigger = item.querySelector('.skill-badge');
        if (!tooltip || !trigger) return;

        tooltip.style.setProperty('--tooltip-shift', '0px');
        item.removeAttribute('data-placement');

        var triggerRect = trigger.getBoundingClientRect();
        var tooltipWidth = tooltip.offsetWidth;
        var tooltipHeight = tooltip.offsetHeight;
        var viewportWidth = document.documentElement.clientWidth || window.innerWidth;
        var padding = 12;

        if (triggerRect.top - tooltipHeight - 16 < 12) {
          item.setAttribute('data-placement', 'bottom');
        }

        var center = triggerRect.left + triggerRect.width / 2;
        var leftEdge = center - tooltipWidth / 2;
        var rightEdge = center + tooltipWidth / 2;
        var shift = 0;

        if (leftEdge < padding) {
          shift = padding - leftEdge;
        } else if (rightEdge > viewportWidth - padding) {
          shift = (viewportWidth - padding) - rightEdge;
        }

        var maxShift = Math.max(0, tooltipWidth / 2 - 14);
        shift = Math.max(-maxShift, Math.min(maxShift, shift));
        tooltip.style.setProperty('--tooltip-shift', shift.toFixed(1) + 'px');
      };

      var setSkillCardElevation = function (item, active) {
        var card = item.closest('.skill-card');
        if (!card) return;
        card.classList.toggle('has-tooltip-open', active);
      };

      var closeAllSkillTooltips = function (exceptItem) {
        skillItems.forEach(function (item) {
          if (item === exceptItem) return;
          item.classList.remove('is-tooltip-open');
          setSkillCardElevation(item, false);
          var btn = item.querySelector('.skill-badge');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      };

      var openSkillTooltip = function (item) {
        closeAllSkillTooltips(item);
        positionSkillTooltip(item);
        item.classList.add('is-tooltip-open');
        setSkillCardElevation(item, true);
        var btn = item.querySelector('.skill-badge');
        if (btn) btn.setAttribute('aria-expanded', 'true');
      };

      skillItems.forEach(function (item) {
        var trigger = item.querySelector('.skill-badge');
        if (!trigger) return;

        item.addEventListener('pointerenter', function (e) {
          if (e.pointerType && e.pointerType !== 'mouse') return;
          positionSkillTooltip(item);
          setSkillCardElevation(item, true);
        });

        item.addEventListener('pointerleave', function (e) {
          if (e.pointerType && e.pointerType !== 'mouse') return;
          if (item.classList.contains('is-tooltip-open')) {
            closeAllSkillTooltips(null);
          } else {
            setSkillCardElevation(item, false);
          }
        });

        trigger.addEventListener('focus', function () {
          positionSkillTooltip(item);
          setSkillCardElevation(item, true);
        });

        trigger.addEventListener('blur', function () {
          if (!item.classList.contains('is-tooltip-open')) {
            setSkillCardElevation(item, false);
          }
        });

        trigger.addEventListener('click', function () {
          var isOpen = item.classList.contains('is-tooltip-open');
          if (isOpen) {
            closeAllSkillTooltips(null);
          } else {
            openSkillTooltip(item);
          }
        });
      });

      document.addEventListener('click', function (e) {
        if (!e.target.closest('.skill-item')) {
          closeAllSkillTooltips(null);
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeAllSkillTooltips(null);
        }
      });

      window.addEventListener('resize', function () {
        var openItem = document.querySelector('.skill-item.is-tooltip-open');
        if (openItem) positionSkillTooltip(openItem);
      }, { passive: true });
    }

    var zenToggle = document.querySelector('.zen-toggle');
    var zenHero = document.querySelector('.hero');
    var zenFirstReading = document.querySelector('[data-zen-reading]');

    if (zenToggle) {
      var zenActive = false;

      var applyZenMode = function (active) {
        if (zenActive === active) return;
        zenActive = active;
        document.documentElement.classList.toggle('zen-mode', active);
        zenToggle.setAttribute('aria-pressed', active ? 'true' : 'false');
        var label = active ? 'Sair do Modo Zen' : 'Ativar Modo Zen';
        zenToggle.setAttribute('aria-label', label);
        zenToggle.setAttribute('data-label', active ? 'Sair do Zen (Esc)' : 'Modo Zen');
      };

      zenToggle.addEventListener('click', function () {
        var nextActive = !zenActive;
        applyZenMode(nextActive);

        if (nextActive && zenHero && zenHero.getBoundingClientRect().bottom > 80) {
          var targetSection = zenFirstReading || document.querySelector('main');
          if (targetSection) {
            var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            var targetTop = window.scrollY + targetSection.getBoundingClientRect().top - 56;
            window.scrollTo({
              top: Math.max(0, targetTop),
              behavior: reduced ? 'auto' : 'smooth'
            });
          }
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (document.querySelector('dialog[open]')) return;
        if (zenActive) {
          applyZenMode(false);
        }
      });
    }

    var railNav = document.querySelector('.rail-nav');
    var railIndicator = document.querySelector('.rail-nav__indicator');
    var railNavLinks = document.querySelectorAll('.rail-nav__btn[data-section]');
    if (railNavLinks.length) {
      var railEntries = [];
      railNavLinks.forEach(function (link) {
        var id = link.getAttribute('data-section');
        var section = id ? document.getElementById(id) : null;
        if (section) {
          railEntries.push({ link: link, section: section });
        }
      });

      if (railEntries.length) {
        var railRaf = 0;

        var syncActiveRailSection = function () {
          railRaf = 0;
          var vh = window.innerHeight || document.documentElement.clientHeight;
          var anchorY = vh * 0.42;
          var doc = document.documentElement;
          var atBottom = (window.scrollY + vh) >= (doc.scrollHeight - 40);
          var activeEntry = null;

          if (atBottom) {
            activeEntry = railEntries[railEntries.length - 1];
          } else {
            for (var i = 0; i < railEntries.length; i += 1) {
              var rect = railEntries[i].section.getBoundingClientRect();
              if (rect.top <= anchorY) {
                activeEntry = railEntries[i];
              }
            }
          }

          railEntries.forEach(function (entry) {
            var isActive = entry === activeEntry;
            entry.link.classList.toggle('is-active', isActive);
            if (isActive) {
              entry.link.setAttribute('aria-current', 'true');
            } else {
              entry.link.removeAttribute('aria-current');
            }
          });

          if (railIndicator && railNav) {
            if (activeEntry) {
              var offsetX = activeEntry.link.offsetLeft;
              var offsetY = activeEntry.link.offsetTop;
              railIndicator.classList.add('is-visible');
              railIndicator.style.transform = 'translate3d(' + offsetX + 'px, ' + offsetY + 'px, 0) scale(1)';
            } else {
              railIndicator.classList.remove('is-visible');
              railIndicator.style.transform = 'translate3d(0, 0, 0) scale(0.85)';
            }
          }
        };

        var scheduleRailSync = function () {
          if (railRaf) return;
          railRaf = window.requestAnimationFrame(syncActiveRailSection);
        };

        railEntries.forEach(function (entry) {
          entry.link.addEventListener('click', function (e) {
            e.preventDefault();
            var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            var targetTop = window.scrollY + entry.section.getBoundingClientRect().top - 48;
            window.scrollTo({
              top: Math.max(0, targetTop),
              behavior: reduced ? 'auto' : 'smooth'
            });
          });
        });

        window.addEventListener('scroll', scheduleRailSync, { passive: true });
        window.addEventListener('resize', scheduleRailSync, { passive: true });
        syncActiveRailSection();
      }
    }
  })();
