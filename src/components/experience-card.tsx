import { Reveal } from './reveal';
import { Badge } from './ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import { EvervaultCard } from './ui/evervault-card';

interface ExperienceCardProps {
    title: string;

    description: string;
}

export function ExperienceCard({ title, description }: ExperienceCardProps) {
    return (
        <Card className="w-full">
            <Reveal
                initial={{ opacity: 0, y: -50 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                }}
            >
                <CardHeader>
                    <CardTitle className="text-emerald-100">{title}</CardTitle>
                </CardHeader>
            </Reveal>
            <CardContent className="flex flex-col gap-4">
                <Reveal
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    {/* <p className="leading-7 text-emerald-50">{description}</p> */}
                    <EvervaultCard text={description} />
                </Reveal>
            </CardContent>
        </Card>
    );
}
