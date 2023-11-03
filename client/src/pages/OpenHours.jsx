function OpenHours({ open, close, day }) {

  return (
    <div className="table-responsive  justify-center  bg-white dark:bg-black">
      <table className="w-full">
        <tbody>
          <tr className="border-b dark:border-neutral-500  dark:text-white  text-black">
            <td className="whitespace-nowrap px-4 md:px-6 py-3 md:py-4 font-medium">
              {day}
            </td>
            <td className="whitespace-nowrap px-4 md:px-6 py-3 md:py-4  dark:text-white">{open}</td>
            <td className="whitespace-nowrap px-4 md:px-6 py-3 md:py-4  dark:text-white">{close}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OpenHours;
