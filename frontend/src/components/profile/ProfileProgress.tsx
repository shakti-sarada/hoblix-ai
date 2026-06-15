interface Props {
  completed: boolean;
  percentage?: number;
}

const ProfileProgress = ({
  completed,
  percentage = 100,
}: Props) => {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-white">
          Profile Completion
        </h3>

        <span className="text-sm text-slate-300">
          {percentage}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className="
          h-full
          rounded-full
          bg-indigo-600
          transition-all
          duration-500
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-400">
        {completed
          ? "Profile completed"
          : "Profile still needs information"}
      </p>
    </div>
  );
};

export default ProfileProgress;