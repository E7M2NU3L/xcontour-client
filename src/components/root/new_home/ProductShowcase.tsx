export const ProductShowcase = () => {
  return (
    <div className="bg-gradient-to-b from-background to-primary/70 py-[72px]">
      <div className="container">
        <main className="max-w-3xl mx-auto">
        <h2 className="text-5xl text-center font-semibold tracking-tight">Intuitive Interface, Smooth User Experience</h2>
        <p className="text-xl text-center mt-5 text-muted-foreground">Xcontour simplifies contract management for freelancers, allowing you to focus on what you do best. With AI-driven features, you can ensure compliance and streamline your workflow effortlessly.</p>
        </main>

        <main className="max-w-7xl mx-auto">
          <img src={"/product (2).png"} alt="app" className="mt-14 rounded-2xl" />
        </main>
      </div>
    </div>
  );
};
