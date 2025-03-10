import Header from "./header";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <div>
          Feed Item 1 with a long character width so that I can style with that in mind. More width, how far do we go before it wraps.
        </div>
        <div>
          Feed Item 2
        </div>
        <div>
          Feed item 3
        </div>
      </div>
    </>
  );
}
