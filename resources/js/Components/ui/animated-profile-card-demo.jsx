import { IdentityCardBody, RevealCardContainer } from "@/Components/ui/animated-profile-card";
import { Github, Twitter } from "lucide-react";

const profile = {
  avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=280&q=80",
  avatarText: "JD",
  fullName: "John Doe",
  place: "San Francisco, USA",
  about: "Software Engineer at 21st, building clean UI systems and experimenting with new dev tools.",
  socials: [
    {
      id: "gh",
      url: "https://github.com/21st-dev",
      label: "GitHub",
      icon: <Github className="h-5 w-5" />,
    },
    {
      id: "tw",
      url: "https://x.com/21st_dev",
      label: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
    },
  ],
};

export default function ProfileCardDemo() {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center bg-gray-50 p-6">
      <RevealCardContainer
        accent="#0f59bc"
        textOnAccent="#ffffff"
        mutedOnAccent="rgba(255,255,255,0.8)"
        base={
          <IdentityCardBody {...profile} scheme="plain" displayAvatar={false} />
        }
        overlay={
          <IdentityCardBody
            {...profile}
            scheme="accented"
            displayAvatar={true}
            cardCss={{ backgroundColor: "var(--accent-color)" }}
          />
        }
      />
    </div>
  );
}
