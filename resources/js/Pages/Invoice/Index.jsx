import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link, router } from "@inertiajs/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import TableHeading from "@/Components/TableHeading";
export default function Index({ auth, invoices, queryParams = null, success }) {
  queryParams = queryParams || {};

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("invoice.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("invoice.index"), queryParams);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex w-full justify-between items-center">
          <span>
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
              Invoice
            </h2>
          </span>
          <Link
            href={route("invoice.create")}
            className="bg-emerald-600 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-700"
          >
            Add new invoice
          </Link>
        </div>
      }
    >
      <Head title="Invoices" />
      {success && <div className="bg-emerald-500 py-2 px-2">{success}</div>}

      {/* <div className="text-white"><pre>{JSON.stringify(invoices,undefined,2)}</pre></div>  */}
      {/* <div className="text-white"><pre>{JSON.stringify(billTo,undefined,2)}</pre></div>  */}
      <div className="py-4">
        <div className="max-w-8xl mx-auto sm:px-6 lg:px-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-100 dark:text-gray-100">
              <div className="overflow-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-b-2 border-gray-500 ">
                    <tr className="text-nowrap">
                      <TableHeading
                        name="id"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        {" "}
                        ID
                      </TableHeading>
                      <th className="px-3 py-2">Image</th>

                      <TableHeading
                        name="invoice_type"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        {" "}
                        Invoice Type
                      </TableHeading>

                      <TableHeading
                        name="created_by"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Created By
                      </TableHeading>

                      <TableHeading
                        name="bill_from"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Bill From
                      </TableHeading>
                      <TableHeading
                        name="bill_to"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Bill to
                      </TableHeading>

                      <TableHeading
                        name="invoice_financial_year"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        {" "}
                        Financial Year
                      </TableHeading>

                      <TableHeading
                        name="invoice_number"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        {" "}
                        Invoice
                      </TableHeading>

                      <TableHeading
                        name="invoice_amount"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        {" "}
                        Invoice Amount
                      </TableHeading>
                      <TableHeading
                        name="tax"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        {" "}
                        Tex
                      </TableHeading>

                      <TableHeading
                        name="reference_number"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        {" "}
                        Ref No.
                      </TableHeading>

                      <th className="px-3 py-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <th className="px-3 py-2 col-span-3" colSpan={3}>
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.name}
                          placeholder="Search invoice type..."
                          onBlur={(e) =>
                            searchFieldChanged("name".e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("name", e)}
                        ></TextInput>
                      </th>
                      <th className="px-3 py-2" colSpan={3}>
                        <SelectInput
                          className="w-full"
                          defaultValue={queryParams.status}
                          onChange={(e) =>
                            searchFieldChanged("status", e.target.value)
                          }
                        >
                          <option value="">Select Status</option>
                          <option value="pending">Pending</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </SelectInput>
                      </th>

                      <th className="px-3 py-2 col-span-3" colSpan={6}></th>
                    </tr>
                  </thead>

                  <tbody>
                    {invoices.data.map((invoice, index) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white"
                        key={index}
                      >
                        <td className="px-3 py-2">{invoice.id}</td>
                        <td className="px-3 py-2 rounded-xl">
                          <img
                            src={invoice.invoice_image}
                            alt=""
                            width={70}
                            className="rounded-md"
                          />
                        </td>
                        <td className="px-3 py-2">{invoice.invoice_type}</td>
                        <td className="px-3 py-2">{invoice.createdBy.name}</td>
                        <td className="px-3 py-2 text-nowrap">
                          {invoice.bill_to}
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {" "}
                          {invoice.bill_from}
                        </td>
                        <td> {invoice.invoice_financial_year}</td>
                        <td className="text-blue-400 hover:underline">
                          {" "}
                          <Link href={route("invoice.show", invoice.id)}>
                            {" "}
                            {invoice.invoice_number}{" "}
                          </Link>
                        </td>
                        <td> {invoice.invoice_amount}</td>
                        <td> {invoice.tax}%</td>
                        <td> {invoice.reference_number}</td>
                        <td className="px-3 py-2 float-end">
                          <Link
                            href={route("invoice.edit", invoice.id)}
                            className="text-lg text-yellow-600 dark:text-yellow-500 hover:underline mx-1 pr-2"
                          >
                            <svg
                              class="feather feather-edit"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </Link>
                          {/* <Link
                            href="{route('project.destroy',project.id)}"
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            Delete{" "}
                          </Link> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={invoices.meta.links}></Pagination>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
