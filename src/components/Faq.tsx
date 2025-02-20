import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/data/faqs.json";

const Faq = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem
          className="bg-gray-800 px-2"
          value={faq.question}
          key={index}
        >
          <AccordionTrigger className="font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
