type CategoryGroupProps = {
    header: string;
    children: React.ReactNode;
};

export default function CategoryGroup({ header, children }: CategoryGroupProps) {
    return (
        <div className="flex flex-col">
            <h2 className="text-2xl">{header}</h2>
            <hr />
            <div className="mt-2">
                {children}
            </div>
        </div>
    );
}