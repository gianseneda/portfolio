import FlowingMenu from "./FlowingMenu/FlowingMenu";

interface MenuItemData {
  link: string;
  text: "ciandt" | "gatec" | "teuteuf";
  image: string;
}

export const Companies = () => {
  const demoItems: MenuItemData[] = [
    {
      link: "https://teuteuf.fr/",
      text: "teuteuf",
      image: "./assets/backgrounds/teuteuf.png",
    },
    {
      link: "https://ciandt.com/br/pt-br/home",
      text: "ciandt",
      image: "./assets/backgrounds/ciandt.png",
    },
    {
      link: "https://gatec.com.br/simplefarm-agronegocio/",
      text: "gatec",
      image: "./assets/backgrounds/gatec.png",
    },
  ];

  return (
    <section
      className="relative min-h-[420px] overflow-hidden mt-40"
      id="companies-section"
    >
      <div style={{ height: "420px", position: "relative" }}>
        <FlowingMenu
          items={demoItems}
          speed={15}
          textColor="#818cf8"
          bgColor="#0a0a0a"
          marqueeBgColor="#a5b4fc"
          marqueeTextColor="#292524"
          borderColor="#818cf8"
        />
      </div>
    </section>
  );
};
