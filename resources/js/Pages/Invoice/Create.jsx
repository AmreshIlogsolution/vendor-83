import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

const divStyle = {
  colorScheme: "dark",
};
export default function Create({ auth, invoiceType, billto, states }) {
  const { data, setData, post, errors, reset } = useForm({
    invoice_type: "",
    invoice_financial_year: "",
    bill_to: "",
    bill_from: "",
    invoice_date: "",
    invoice_number: "",
    reference_number: "",
    invoice_amount: "",
    bill_type: "",
    tax: "",
    tax_amount: "",
    total_tax_amount: "",
    invoice_image: "",
    upload_document: [],
    remarks: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("invoice.store"));
  };

  useEffect(() => {
    setData("total_tax_amount", (data.tax * data.tax_amount) / 100);
  }, [data.tax_amount]);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Create new Invoice
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
      <Head title="Invoice" />
      {/* <pre>{JSON.stringify(billto, undefined, 2)}</pre>  */}
      <div className="py-12">
        <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <div className="mt-4">
                    <InputLabel
                      htmlFor="invoiceType_status"
                      value="invoice Type  Status"
                    />
                    <SelectInput
                      name="invoice_type"
                      id="invoice_type"
                      className="mt-1 block w-full"
                      onChange={(e) => setData("invoice_type", e.target.value)}
                    >
                      <option value="">Select Invoice Type</option>
                      {invoiceType.map((invtype, index) => (
                        <option key={index} value={invtype.invoice_type}>
                          {invtype.invoice_type}
                        </option>
                      ))}
                    </SelectInput>
                    <InputError
                      message={errors.invoice_type}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel
                      htmlFor="invoice_Fy"
                      value="Invoice Financial Year"
                    />
                    <SelectInput
                      name="invoice_financial_year"
                      id="invoice_financial_year"
                      className="mt-1 block w-full"
                      onChange={(e) =>
                        setData("invoice_financial_year", e.target.value)
                      }
                    >
                      <option value="">Select Invoice Financial Year</option>
                      <option value="2024-2025">2004-2025</option>
                    </SelectInput>
                    <InputError
                      message={errors.invoice_financial_year}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel htmlFor="bill_to" value="Bill To" />
                    <SelectInput
                      name="bill_to"
                      id="bill_to"
                      className="mt-1 block w-full"
                      onChange={(e) => setData("bill_to", e.target.value)}
                    >
                      <option value="">Select Bill To</option>
                      {billto.map((bt, index) => (
                        <option key={index} value={bt.WHname}>
                          {bt.WHname}
                        </option>
                      ))}
                    </SelectInput>
                    <InputError message={errors.bill_to} className="mt-2" />
                  </div>
                </div>

                <div>
                  <div className="mt-4">
                    <InputLabel htmlFor="bill_from" value="Bill From" />
                    <SelectInput
                      name="bill_from"
                      id="bill_from"
                      className="mt-1 block w-full"
                      onChange={(e) => setData("bill_from", e.target.value)}
                    >
                      <option value="">Select Bill From</option>
                      {states.map((state, index) => (
                        <option key={index} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </SelectInput>
                    <InputError message={errors.bill_from} className="mt-2" />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel htmlFor="invoice_date" value="Invoice Date" />

                    <TextInput
                      style={divStyle}
                      id="invoice_date"
                      min={new Date().toISOString().split("T")[0]}
                      max="2025-04-30"
                      type="date"
                      name="invoice_date"
                      value={data.invoice_date}
                      className="mt-1 block w-full fill-white"
                      onChange={(e) => setData("invoice_date", e.target.value)}
                    />

                    <InputError
                      message={errors.invoice_date}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel
                      htmlFor="invoice_number"
                      value="Invoice Number"
                    />

                    <TextInput
                      id="invoice_number"
                      type="number"
                      name="invoice_number"
                      value={data.invoice_number}
                      className="mt-1 block w-full"
                      isFocused={true}
                      onChange={(e) =>
                        setData("invoice_number", e.target.value)
                      }
                    />
                    <InputError
                      message={errors.invoice_number}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel
                      htmlFor="reference_number"
                      value="Reference Number"
                    />
                    <TextInput
                      id="reference_number"
                      type="text"
                      name="reference_number"
                      value={data.reference_number}
                      className="mt-1 block w-full"
                      isFocused={true}
                      onChange={(e) =>
                        setData("reference_number", e.target.value)
                      }
                    />
                    <InputError
                      message={errors.reference_number}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel
                      htmlFor="invoice_amount"
                      value="Invoice Amount"
                    />
                    <TextInput
                      id="invoice_amount"
                      type="text"
                      name="invoice_amount"
                      value={data.invoice_amount}
                      className="mt-1 block w-full"
                      isFocused={true}
                      onChange={(e) =>
                        setData("invoice_amount", e.target.value)
                      }
                    />
                    <InputError
                      message={errors.invoice_amount}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel htmlFor="bill_type" value="Bill Type" />
                    <SelectInput
                      name="bill_type"
                      id="bill_type"
                      className="mt-1 block w-full"
                      onChange={(e) => setData("bill_type", e.target.value)}
                    >
                      <option value="">Select Bill Type</option>
                      <option value="GST">GST</option>
                      <option value="IGST">IGST</option>
                    </SelectInput>
                    <InputError message={errors.bill_type} className="mt-2" />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel htmlFor="tax" value="Tex" />
                    <SelectInput
                      name="tax"
                      id="tax"
                      className="mt-1 block w-full"
                      onChange={(e) => setData("tax", e.target.value)}
                    >
                      <option value="">Select Tex</option>
                      <option value="0">Nil</option>
                      <option value="5">5 %</option>
                      <option value="12">12 %</option>
                      <option value="18">18 %</option>
                      <option value="28">28 %</option>
                    </SelectInput>
                    <InputError message={errors.tax} className="mt-2" />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel htmlFor="tax_amount" value="Tex Amount" />
                    <TextInput
                      id="tax_amount"
                      type="number"
                      name="tax_amount"
                      value={data.tax_amount}
                      className="mt-1 block w-full"
                      isFocused={true}
                      onChange={(e) => setData("tax_amount", e.target.value)}
                    />
                    <InputError message={errors.tax_amount} className="mt-2" />
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <InputLabel
                      htmlFor="total_tax_amount"
                      value="Total tex amount"
                    />

                    <TextInput
                      id="total_tax_amount"
                      type="text"
                      name="total_tax_amount"
                      value={data.total_tax_amount}
                      className="mt-1 block w-full"
                      isFocused={true}
                      disabled
                      // onChange={(e) =>
                      //   setData("total_tax_amount", e.target.value)
                      // }
                    />

                    <InputError
                      message={errors.total_tax_amount}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <InputLabel
                      htmlFor="invoice_image"
                      value="Upload Invoice"
                    />
                    <TextInput
                      id="invoice_image"
                      type="file"
                      name="invoice_image"
                      className="mt-1 block w-full"
                      onChange={(e) =>
                        setData("invoice_image", e.target.files[0])
                      }
                    />
                    <InputError
                      message={errors.invoice_image}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <InputLabel
                      htmlFor="upload_document"
                      value="Upload documents(Select multiple files to upload)"
                    />
                    <TextInput
                      id="upload_document"
                      type="file"
                      multiple
                      name="upload_document"
                      className="mt-1 block w-full"
                      onChange={(e) =>
                        setData("upload_document", e.target.files)
                      }
                    />
                    <InputError
                      message={errors.upload_document}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <InputLabel htmlFor="remarks" value="Remarks" />

                  <TextInput
                    id="remarks"
                    name="remarks"
                    value={data.remarks}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("remarks", e.target.value)}
                  />

                  <InputError message={errors.remarks} className="mt-2" />
                </div>
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("invoice.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
