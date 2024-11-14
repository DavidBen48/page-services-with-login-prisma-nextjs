import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  pricePerMonth: string;
  planFeatures: string[];
}

interface descriptionKeysValues {
  [key: string]: string[];
}

const planDescriptions: descriptionKeysValues = {
  "Plano Básico": [
    "Acesso a 1 ebook por mês",
    "Curadoria Básica",
    "Acesso limitado",
    "Cancelamento após 3 meses *",
  ],
  "Plano Pro": [
    "Acesso a 5 ebooks por mês",
    "Curadoria média",
    "Acesso ilimitado",
    "Cancelamento após 2 meses *",
  ],
  "Plano Premium": [
    "Acesso ilimitado de ebooks",
    "Curadoria especial",
    "Acesso ilimitado",
    "Cancele quando quiser",
  ],
};

function PricingCard({ title, description, price, pricePerMonth, planFeatures }: PricingCardProps) {
  return (
    <Card className="w-[350px] text-left md:w-[300px] sm:w-full mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold mb-8 mt-4">
          {price}
          <span className="font-normal text-muted-foreground text-lg">
            /{pricePerMonth}
          </span>
        </p>
        <ul>
          {planFeatures.map((feature, index) => (
            <li key={index} className="flex gap-2 text-muted-foreground">
              <Check className="w-4 text-green-600" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <Button className="w-full">Assine Agora</Button>
      </CardFooter>
    </Card>
  );
}

export default function PricingSection() {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
      <PricingCard
        title="Plano Básico"
        description="Ideal para quem não quer investir muito e precisa apenas do básico"
        price="R$9,90"
        pricePerMonth="mês"
        planFeatures={planDescriptions["Plano Básico"]}
      />
      <PricingCard
        title="Plano Pro"
        description="Para quem deseja mais recursos do que um básico"
        price="R$29,90"
        pricePerMonth="mês"
        planFeatures={planDescriptions["Plano Pro"]}
      />
      <PricingCard
        title="Plano Premium"
        description="O melhor para usuários viciados em livros"
        price="R$49,90"
        pricePerMonth="mês"
        planFeatures={planDescriptions["Plano Premium"]}
      />
    </div>
  );
}