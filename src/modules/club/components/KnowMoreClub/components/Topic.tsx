interface TopicProps {
  children: string;
}
const Topic = ({ children }: TopicProps) => {
  return (
    <div className="flex gap-x-6">
      <div className="w-7 h-7 rounded-full bg-[#1e9cd6] border border-white"></div>
      <p className="text-white font-roboto">{children}</p>
    </div>
  );
};

export default Topic;
