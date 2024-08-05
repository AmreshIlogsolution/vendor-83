import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link, router } from "@inertiajs/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
export default function Index({ auth, projects, queryParams = null }) {

  queryParams = queryParams || {};

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("project.index"), queryParams);
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
    router.get(route("project.index"), queryParams);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />
      <div className="py-12">
        <div className="max-w-8xl mx-auto sm:px-4 lg:px-6">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <th onClick={(e) => sortChanged("id")}>
                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                          ID
                          <div>
                            <ChevronUpIcon
                              className={
                                "w-4 " +
                                (queryParams.sort_field === "id" &&
                                queryParams.sort_direction === "asc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                            <ChevronDownIcon
                              className={
                                "w-4 -mt-2 " +
                                (queryParams.sort_field === "id" &&
                                queryParams.sort_direction === "desc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                          </div>
                        </div>
                      </th>
                      <th className="px-3 py-2">Image</th>
                      <th onClick={(e) => sortChanged("name")}>
                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                          Name
                          <div>
                            <ChevronUpIcon
                              className={
                                "w-4 " +
                                (queryParams.sort_field === "name" &&
                                queryParams.sort_direction === "asc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                            <ChevronDownIcon
                              className={
                                "w-4 -mt-2 " +
                                (queryParams.sort_field === "name" &&
                                queryParams.sort_direction === "desc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                          </div>
                        </div>
                      </th>
                      <th onClick={(e) => sortChanged("status")}>
                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                          Status
                          <div>
                            <ChevronUpIcon
                              className={
                                "w-4 " +
                                (queryParams.sort_field === "status" &&
                                queryParams.sort_direction === "asc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                            <ChevronDownIcon
                              className={
                                "w-4 -mt-2 " +
                                (queryParams.sort_field === "status" &&
                                queryParams.sort_direction === "desc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                          </div>
                        </div>
                      </th>
                      <th onClick={(e) => sortChanged("created_at")}>
                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                          Create Date
                          <div>
                            <ChevronUpIcon
                              className={
                                "w-4 " +
                                (queryParams.sort_field === "created_at" &&
                                queryParams.sort_direction === "asc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                            <ChevronDownIcon
                              className={
                                "w-4 -mt-2 " +
                                (queryParams.sort_field === "created_at" &&
                                queryParams.sort_direction === "desc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                          </div>
                        </div>
                      </th>
                      <th
                        onClick={(e) => sortChanged("due_date")}
                        className="px-3 py-2"
                      >
                        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                          Due Date
                          <div>
                            <ChevronUpIcon
                              className={
                                "w-4 " +
                                (queryParams.sort_field === "due_date" &&
                                queryParams.sort_direction === "asc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                            <ChevronDownIcon
                              className={
                                "w-4 -mt-2 " +
                                (queryParams.sort_field === "due_date" &&
                                queryParams.sort_direction === "desc"
                                  ? "text-black"
                                  : "")
                              }
                            />
                          </div>
                        </div>
                      </th>
                      <th className="px-3 py-2">Created By</th>
                      <th className="px-3 py-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.name}
                          placeholder="Project Name"
                          onBlur={(e) =>
                            searchFieldChanged("name".e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("name", e)}
                        ></TextInput>
                      </th>
                      <th className="px-3 py-2">
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

                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.data.map((project) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={project.id}
                      >
                        <td className="px-3 py-2">{project.id}</td>
                        <td className="px-3 py-2">
                          <img src={project.image_path} alt="" width={70} />
                        </td>
                        <td className="px-3 py-2">{project.name}</td>
                        <td className="px-3 py-2">
                          <span
                            className={
                              "px-2 py-1 rounded text-white " +
                              PROJECT_STATUS_CLASS_MAP[project.status]
                            }
                          >
                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {project.created_at}
                        </td>
                        <td className="px-3 py-2">{project.due_date}</td>
                        <td className="px-3 py-2">{project.createdBy.name}</td>
                        <td className="px-3 py-2">
                          <Link
                            href="{route('project.edit',project.id)}"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          >
                            Edit{" "}
                          </Link>
                          <Link
                            href="{route('project.destroy',project.id)}"
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            Delete{" "}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={projects.meta.links}></Pagination>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
