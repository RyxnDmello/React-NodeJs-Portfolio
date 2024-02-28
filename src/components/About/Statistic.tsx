export default function Statistic({ title, rating = 5 }: IStatistic) {
  const className = "about-statistic";

  return (
    <div className={className}>
      <p className={`${className}-title`}>{title}</p>

      <div className={`${className}-rating`}>
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <div
              key={i}
              className={`${className}-bullet ${i < rating && "marked"}`}
            />
          );
        })}
      </div>
    </div>
  );
}

interface IStatistic {
  title: string;
  rating?: number;
}
