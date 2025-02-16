import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center py-24">
          Streamline Your Workflow <br />
          <span className="mt-1">
            with <span className="gradient-bg px-2 rounded-md">SCRUM</span>
          </span>
        </h1>

        <div className="container mx-auto flex flex-col gap-2 items-center justify-center text-center">
          <p className="text-xl md:text-3xl lg:text-4xl">
            Empower your team with our intuitive project management solution.
          </p>
          <div>
            <Link href="/onboarding">
              <Button size="lg" className="mr-4">
                Get Started <ChevronRight size={18} className="ml-1" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" className="mr-4" variant="outline">
                Learn More <ChevronRight size={18} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3>Key Features</h3>
          <div></div>
        </div>
      </section>
    </div>
  );
}
