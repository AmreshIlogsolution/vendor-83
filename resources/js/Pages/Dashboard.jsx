import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth, totalInvoiceCreatedByUser }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 px-4 py-5 overflow-hidden shadow-sm sm:rounded-lg">
            {/* <div className="p-6 text-gray-900 dark:text-gray-100">
              You're logged in!
            </div> */}

            <Link
              href={route("invoice.index")}
              className=" active:scale-95 duration-200 flex items-center justify-center p-4 rounded-lg h-44 w-96 border border-gray-400   shadow-blue-800"
            >
              <h2 className="  text-[32px] text-amber-500 text-2xl font-semibold">
                Total Invoice :{" "}
                <span className="text-white">{totalInvoiceCreatedByUser}</span>
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
