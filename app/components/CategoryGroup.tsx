type CategoryGroupProps = {
    header: string;
    children: React.ReactNode;
};

export default function CategoryGroup({ header, children }: CategoryGroupProps) {
    return (
        <div className="flex flex-col">
            <h2 className="text-2xl text-center md:text-start">{header}</h2>
            <hr />
            <div className="mt-2 flex flex-wrap gap-8 justify-center md:justify-start">
                {children}
            </div>
        </div>
    );
}