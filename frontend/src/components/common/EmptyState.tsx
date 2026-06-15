interface Props {
  title: string;
}

const EmptyState = ({
  title,
}: Props) => {
  return (
    <div className="rounded-xl border p-8 text-center">
      {title}
    </div>
  );
};

export default EmptyState;