import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect } from "react";
export default function Show({ invoice, invoiceDetails, auth, success }) {
  // useEffect(() => {
  //   console.log("Show", invoiceDetails[0].invoice_detail);
  // }, []);

  const deleteInvoiceDocument = (invid, indocid) => {
    if (!window.confirm("Are you sure you want to delete the project?")) {
      return;
    }
    //router.delete(route("invoice-doucment-destroy", invid, invdocid));
    // const id = {invid + "_" + indocid;}
    const id = `${invid}_${indocid}`;

    router.delete(route("invoice.destroy", id), { preserveScroll: true });
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex w-full justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Invoice Detail
          </h2>
          <span
            className="bg-blue-500 py-1 px-8 text-white rounded shadow transition-all
           hover:bg-blue-600 float-right  "
          >
            <Link href={route("invoice.index")}>Back to invoice</Link>
          </span>
        </div>
      }
    >
      <Head title="Invoices" />
      {success && <div className="bg-emerald-500 py-2 px-2">{success}</div>}
      {/* <pre>{JSON.stringify(invoice, undefined, 2)}</pre>    */}
      {/* <pre className="text-white">{JSON.stringify(invoiceDetails.invoice_detail, undefined, 2)}</pre>     */}
      <div className="py-4">
        <div className="max-w-8xl mx-auto sm:px-6 lg:px-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-4">
            <div className="p-6 text-gray-100 dark:text-gray-100">
              <div className="grid grid-cols-3 xl:grid-cols-3 gap-4 px-4 py-4">
                <div className="w-full  ">
                  <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="rounded-t-lg w-full h-64 object-cover"
                      src={invoice.invoice_image}
                      alt=""
                    />
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Invoice Number :{invoice.invoice_number}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Bill To :{invoice.bill_to}
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Bill From :{invoice.bill_from}
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Invoice Date :{invoice.invoice_date}
                      </p>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Reference Number :{invoice.reference_number}
                      </p>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Inoice Amount :{invoice.invoice_amount}
                      </p>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Bill Type :{invoice.bill_type}
                      </p>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Tax :{invoice.tax}%
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Tax Amount :{invoice.tax_amount}%
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Created By :{invoice.createdBy.name}
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Remarks :{invoice.remarks}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full rounded-xl col-span-2 border border-indigo-600 px-8 py-4">
                  <div className=" w-full h-[670px] overflow-y-scroll space-y-2 px-2 ">
                    {invoiceDetails[0].invoice_detail.map((inv, index) => (
                      <div
                        key={index}
                        className="flex items-center w-full gap-x-5 pr-4"
                      >
                        <div className="p-2 w-full border border-gray-500 rounded-md hover:bg-gray-700 active:scale-95 focus:scale-95 duration-150">
                          <div class="grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                              <a
                                href={inv.invoice_image}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {/* {++index} ) Invoice docoument{" "} */}
                                <span className=" flex ">
                                  <h1> {`${index + 1}) `} Invoice Document </h1>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div>
                          <span className="float-right">
                            <button
                              onClick={(e) =>
                                deleteInvoiceDocument(invoice.id, inv.id)
                              }
                              className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="red"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className=" active:scale-125 duration-100 focus:drop-shadow-lg focus:shadow-red-500 focus:shadow-md active:shadow-lg"
                              >
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                <line x1="10" x2="10" y1="11" y2="17" />
                                <line x1="14" x2="14" y1="11" y2="17" />
                              </svg>
                            </button>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
