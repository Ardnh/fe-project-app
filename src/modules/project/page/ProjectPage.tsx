import { Fragment } from "react/jsx-runtime"
import { TabView, TabPanel } from 'primereact/tabview'
import { Dropdown } from 'primereact/dropdown'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useState } from "react";
import { products1 } from "../dummy"
import styles from "../css/index.module.css"

const ProjectPage = () => {
     const [selectedCity, setSelectedCity] = useState(null);
     const cities = [
         { name: 'New York', code: 'NY' },
         { name: 'Rome', code: 'RM' },
         { name: 'London', code: 'LDN' },
         { name: 'Istanbul', code: 'IST' },
         { name: 'Paris', code: 'PRS' }
     ];

     return (
          <Fragment>

               <div className="h-auto border-round-2xl w-full p-4" style={{ backgroundColor: "#30484A" }}>
                    <div>
                         <div className="mb-2 flex flex-wrap justify-content-between align-items-start">
                              <div className="text-xl text-gray-200">
                                   Project Overview
                              </div>
                         </div>
                         <div className="text-sm text-gray-200">
                              This is a summary of all your project progress
                         </div>
                    </div>
               </div>

               <div className="mt-4">
                    <TabView>
                         <TabPanel header="Draft (20)">
                              <div className="w-full mb-4 flex flex-wrap justify-content-end align-items-center card">
                                   <Dropdown 
                                        value={selectedCity} 
                                        onChange={(e) => setSelectedCity(e.value)} 
                                        options={cities} 
                                        optionLabel="name" 
                                        placeholder="Sort by" 
                                        className={`w-full md:w-14rem mr-3 ${styles['p-dropdown-item']} ${styles['p-dropdown-label']}`}
                                   />
                                   <Dropdown 
                                        value={selectedCity} 
                                        onChange={(e) => setSelectedCity(e.value)} 
                                        options={cities} 
                                        optionLabel="name" 
                                        placeholder="Select a category" 
                                        className={`w-full md:w-14rem ${styles['p-dropdown-item']} ${styles['p-dropdown-label']}`}
                                   />
                              </div>
                              <div className="">
                                   <DataTable value={products1} tableStyle={{ minWidth: '50rem' }} paginator rows={15} rowsPerPageOptions={[10, 20, 30, 50]}>
                                        <Column field="code" header="Code"></Column>
                                        <Column field="name" header="Name"></Column>
                                        <Column field="category" header="Category"></Column>
                                        <Column field="quantity" header="Quantity"></Column>
                                   </DataTable>
                              </div>
                         </TabPanel>
                         <TabPanel header="Ongoing (12)">
                              <p className="m-0">
                                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                   eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                   enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                                   ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                              </p>
                         </TabPanel>
                         <TabPanel header="Done (9)">
                              <p className="m-0">
                                   At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                                   quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                   culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                                   Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                              </p>
                         </TabPanel>
                    </TabView>
               </div>

          </Fragment>
     )
}

export default ProjectPage