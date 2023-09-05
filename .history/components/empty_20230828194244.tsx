interface EmptyProps {
    label: string;
}

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex-col items-center justify-center">
            Empty COmpoenet
        </div>
    );
}