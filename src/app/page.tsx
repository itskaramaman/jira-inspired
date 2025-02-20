import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Layout, Calendar, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CompanyCarousel from "@/components/CompanyCarousel";
import Faq from "@/components/Faq";

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

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

      <section id="features" className="bg-gray-900 py-20 px-5 mt-10">
        <div className="container mx-auto ">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                  <h4 className="text-xl mb-2 font-semibold">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto ">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted By Industry Leaders
          </h3>

          <CompanyCarousel />
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto ">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted By Industry Leaders
          </h3>

          <Faq />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto flex flex-col items-center gap-5">
          <h3 className="text-4xl font-bold text-center">
            Ready to Transform Your Workload?
          </h3>

          <p className="text-center">
            Join thousands of teams already using SCRUM to streamline their
            projects and boost productivity.
          </p>

          <Link href="/onboarding">
            <Button className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
