import FlowingMenu from "./FlowingMenu/FlowingMenu";

export const Companies = () => {
  const demoItems = [
    {
      link: "https://teuteuf.fr/",
      text: "teuteuf",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "https://ciandt.com/br/pt-br/home",
      text: "ciandt",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "https://gatec.com.br/simplefarm-agronegocio/",
      text: "gatec",
      image: "https://picsum.photos/600/400?random=2",
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
