import Image from "next/image";

export default function PageLink({ link, imgSrc, name } : { link: string, imgSrc: string, name: string }) {
    return (
        <div className="w-37.5">
            <a href={link}>
                <Image src={imgSrc} alt={`Image for ${link}`} width={150} height={150}/>
                <h3 className="text-center text-xl whitespace-pre-line">{name}</h3>
            </a>
        </div>
    );
}