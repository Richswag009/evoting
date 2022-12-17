const Candidates = ({ candidates }) => {
  return (
    <div>
      <table className="w-full border border-seperate border-spacing-4">
        <thead className="rounded-3xl">
          <tr className="w-[100%] border  bg-lime-400 ">
            <th className="border py-2 border-slate-400">candidates Name</th>
            <th className="border  border-slate-400">Total VoteResults</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr className="" key={candidate.id}>
              <td className="border py-3 pl-3  border-slate-400">
                {candidate.name}
              </td>
              <td className="border text-center  border-slate-400">
                {candidate.number_of_vote}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Candidates;
