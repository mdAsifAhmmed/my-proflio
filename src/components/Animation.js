import CountUp from "react-countup";
export const LoginAnimation = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="loading-content relative h-52 w-52 rounded-full my-24 m-auto overflow-hidden bg-gray-200">
        <div className="loading-content__center-part relative top-2/4 left-6 z-50 h-40 w-40 transform -translate-y-2/4 rounded-full bg-gray-200">
        <div className="flex h-full w-full items-center justify-center">
            <p className="text-2xl">
              <CountUp duration={1} start={0} end={100} />
            </p>
          </div>
        </div>
        <div className="loading-content__loader absolute left-24 top-0 h-full w-4">
          <div className="loading-content__loader-content h-10 w-full bg-blue-300 "></div>
        </div>
      </div>
    </div>
  );
};
export const FidAnimation = () => {
  return (
    <>
      {(() => {
        let fun = [];
        for (let i = 0; i <= 5; i++) {
          fun.push(
            <div className="border border-gray-300 border-opacity-10 portfolio_item shadow rounded-md p-4 max-w-sm mx-auto">
              <div className="flex animate-pulse  items-center w-full flex-col justify-center space-x-4">
                <div className="rounded-2xl bg-gray-50 bg-opacity-70 dark:bg-opacity-20 backdrop-filter backdrop-blur-xl mix-blend-multiply h-40 w-full"></div>
                <div className="flex-1 flex-row space-y-4 w-full py-1">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-50 rounded w-5/6  bg-opacity-70 dark:bg-opacity-20 backdrop-filter backdrop-blur-xl"></div>
                  </div>
                  <div className="h-10 bg-gray-50 rounded-full  bg-opacity-70 dark:bg-opacity-20  backdrop-filter backdrop-blur-xl w-2/4"></div>
                </div>
              </div>
            </div>
          );
        }
        return fun;
      })()}
    </>
  );
};
