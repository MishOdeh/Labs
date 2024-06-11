import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { AspectRatio } from './ui/aspect-ratio';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    demoUrl?: string;
    skills?: string[];
}

export function ProjectCard3d({
    title,
    description,
    imageUrl,
    demoUrl,
    skills,
}: ProjectCardProps) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto w-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="w-full mt-4">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                        <Image
                            src={imageUrl}
                            alt="Project Image"
                            fill
                            className="rounded-md object-cover"
                        />
                    </AspectRatio>
                </CardItem>
                <CardItem
                    as="h3"
                    translateZ="60"
                    className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4 text-emerald-100"
                >
                    {title}
                </CardItem>

                <CardItem
                    as="p"
                    translateZ="50"
                    className="leading-7 [&:not(:first-child)]:mt-6 text-emerald-50"
                >
                    {description}
                </CardItem>
                {skills && (
                    <CardItem
                        translateZ="40"
                        className="flex gap-2 flex-wrap mt-6 "
                    >
                        {skills.map((skill) => (
                            <Badge
                                key={skill}
                                variant="default"
                                className="bg-emerald-100"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </CardItem>
                )}
                <div className="flex justify-center items-center mt-10">
                    {demoUrl && (
                        <CardItem translateZ={30}>
                            <Link href={demoUrl} target="_blank" passHref>
                                <Button
                                    variant={'ghost'}
                                    className="bg-emerald-200 text-black"
                                >
                                    Visit
                                    <ExternalLink
                                        className="ml-2"
                                        size={'lg'}
                                    />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                </div>
            </CardBody>
        </CardContainer>
    );
}
