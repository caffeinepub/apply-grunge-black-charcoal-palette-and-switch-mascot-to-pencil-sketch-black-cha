export function FooterSection() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us (Why Though?)', href: '#' },
        { label: 'Careers (We\'re Not Hiring)', href: '#' },
        { label: 'Press Kit (Please Don\'t)', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation (Good Luck)', href: '#' },
        { label: 'API (It Doesn\'t Exist)', href: '#' },
        { label: 'Support (Ha!)', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy (We See Everything)', href: '#' },
        { label: 'Terms of Service (You Agreed)', href: '#' },
        { label: 'Cookie Policy (Nom Nom)', href: '#' }
      ]
    }
  ];

  const getAppIdentifier = () => {
    try {
      return encodeURIComponent(window.location.hostname || 'timepass-nhi-ho-rha');
    } catch {
      return 'timepass-nhi-ho-rha';
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/timepass-mascot-logo-upload-redhint.dim_512x512.png"
                alt="Time-pass nhi ho rha mascot"
                className="h-10 w-10"
              />
              <span className="font-bold text-xl">Time-pass nhi ho rha</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivering disappointment and deadpan humor since {currentYear}. 
              Because the world needed more sarcasm.
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Time-pass nhi ho rha. All rights reserved. (As if anyone would steal this.)
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <span className="text-foreground">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
