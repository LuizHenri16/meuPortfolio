import { Button, IconButton } from "@/components";
import Link from "next/link";

interface TemplateProps {
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({
  children,
}: TemplateProps) => {
  return (
    <>
      <Buttons />
      {children}
      <Icons />
    </>
  );
};

const Buttons: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%]">
      <div className="flex gap-1 ">
        <Link href={"/home"}>
          <Button name="HOME" />
        </Link>

        <Link href={"/about"}>
          <Button name="SOBRE MIM" />
        </Link>

        <Link href={"/skills"}>
          <Button name="SKILLS" />
        </Link>

        <Link href={"/projetos"}>
          <Button name="PROJETOS" />
        </Link>
      </div>

      <div className="mt-6 border-1 border-custom-100/80 w-[100%] sm:w-[80%] md:[60%]"></div>
    </div>
  );
};

const Icons: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%]">
      <div className="mt-6 border-1 border-custom-100/80 w-[100%] sm:w-[80%] md:[60%]"></div>

      <div className="flex gap-3 mt-5">
        <IconButton href="https://github.com/LuizHenri16">
          <img
            className="w-12"
            src="/icons/github-icon.svg"
            alt="icone-github"
          />
        </IconButton>

        <IconButton href="https://www.instagram.com/_._luizhenrique/">
          <img
            className=""
            src="/icons/instagram-icon.svg"
            alt="icone-instagram"
          />
        </IconButton>

        <IconButton href="https://www.linkedin.com/in/luiz-bastos-395922213/">
          <img
            className=""
            src="/icons/linkedin-icon.svg"
            alt="icone-linkedin"
          />
        </IconButton>
      </div>
    </div>
  );
};
