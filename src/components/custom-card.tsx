import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

interface Paragraph {
    text: string;
    bold?: string;
    endText?: string;
}

interface Cta {
    href: string;
    label: string;
}

interface CustomCardProps {
    title: string;
    subtitle: string;
    paragraphs?: Paragraph[];
    lists?: string[];
    benefits?: string;
    price?: string;
    image?: string;
    cta?: Cta;
}

const CustomCard: React.FC<CustomCardProps> = ({
                                                   title,
                                                   subtitle,
                                                   paragraphs,
                                                   lists,
                                                   benefits,
                                                   price,
                                                   image,
                                                   cta,
                                               }) => {
    return (
        <Card className={`bg-bg shadow-md rounded-lg overflow-hidden w-1/3 flex flex-col justify-between`}>
            {/* Image */}
            {image && (
                <CardHeader className="p-0">
                    {image.startsWith("/") ? (
                        <Image src={image} alt={title} width={500} height={300}
                               className="w-full object-cover rounded-t-lg"/>
                    ) : (
                        <img src={image} alt={title} className="w-full h-auto rounded-t-lg object-cover"/>
                    )}
                </CardHeader>
            )}

            {/* Contenu */}
            <CardContent className="p-6">
                <CardTitle className="text-xl text-secondary text-center">{title}</CardTitle>
                <CardDescription className="text-base font-bold text-text text-center mb-4">{subtitle}</CardDescription>

                {/* Paragraphes */}
                {paragraphs && (
                    <div className="mb-4">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-base text-text mb-2">
                                {paragraph.text}{" "}
                                {paragraph.bold && <strong className="font-semibold">{paragraph.bold}</strong>}{" "}
                                {paragraph.endText}
                            </p>
                        ))}
                    </div>
                )}

                {/* Liste */}
                {lists && lists.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        {lists.map((listItem, index) => (
                            <li key={index} className="text-base text-text leading-none">{listItem}</li>
                        ))}
                    </ul>
                )}

                {/* Bénéfices */}

            </CardContent>
            <CardContent>{benefits &&
                <p className="text-sm font-semibold text-center text-primary mb-4">{benefits}</p>}</CardContent>
            {/* Footer */}
            <CardFooter className="flex flex-col items-center p-6">

                {price && <p className="text-lg font-bold text-secondary pb-4">{price}</p>}
                {cta && (
                    <Button>
                        <a href={cta.href}>{cta.label}</a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};

export default CustomCard;
