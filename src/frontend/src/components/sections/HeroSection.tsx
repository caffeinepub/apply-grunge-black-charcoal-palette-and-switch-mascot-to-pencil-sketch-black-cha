export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/generated/sarcasm-paper-texture.dim_2048x2048.png)',
        backgroundSize: '400px 400px',
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/85" />
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-8">
            <img
              src="/assets/generated/timepass-mascot-logo-upload-redhint.dim_512x512.png"
              alt="Time-pass nhi ho rha mascot"
              className="h-32 w-32 opacity-90"
            />
          </div>
          
          <div className="space-y-3">
            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
              wow so thrilled
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              Welcome to the Internet.
              <br />
              <span className="text-muted-foreground">You're still here?</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Congratulations on finding yet another website that will change absolutely nothing about your life. 
            We're thrilled you have nothing better to do.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => {
                const element = document.getElementById('sarcasm');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Waste More Time
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('features');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/80 transition-colors"
            >
              See "Features"
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
