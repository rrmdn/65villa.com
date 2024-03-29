export default function BorderedLayout(props: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxWidth: 1024,
        margin: "0 auto",
        padding: 32,
        paddingTop: 64
      }}
    >
      {props.children}
    </div>
  );
}
