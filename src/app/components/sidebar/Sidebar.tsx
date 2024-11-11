import { NavLink } from "react-router-dom"

const Sidebar : React.FC = () => {
     return (
          <div className="sticky top-0">
               <div className="p-4 w-full h-8rem">
                    <div className="text-center text-3xl">ZENTASK</div>
               </div>
               <div className="p-4 w-full">
                    <div className="font-base text-gray-500">Menu</div>
                    <div className="mt-4">
                         <NavLink end to="/dashboard" className="py-3 px-3 border-round-xl font-base cursor-pointer font-base no-underline text-gray-500">
                              {({isActive}) => (
                                   <div className={ `flex py-3 px-3 border-round-xl flex-wrap justify-content-start align-items-center text-base ${ isActive ? 'bg-gray-200' : ''}` }>
                                        <i className="pi pi-objects-column mr-2 text-sm text-gray-500"></i>
                                        <div className="text-sm">Dashboard</div>
                                   </div>
                              )}
                         </NavLink>
                         <NavLink end to="/dashboard/project" className="py-3 px-3 border-round-xl font-base cursor-pointer font-base no-underline text-gray-500">
                              {({isActive}) => (
                                   <div className={ `flex py-3 px-3 border-round-xl flex-wrap justify-content-start align-items-center text-base ${ isActive ? 'bg-gray-200' : ''}` }>
                                        <i className="pi pi-book mr-2 text-sm text-gray-500"></i>
                                        <div className="text-sm">Projects</div>
                                   </div>
                              )}
                         </NavLink>
                    </div>
               </div>
          </div>
     )
}

export default Sidebar