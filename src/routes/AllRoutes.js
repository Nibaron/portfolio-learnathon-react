import { Routes, Route} from "react-router-dom";
import {HomePage, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-600">
        <Routes>
              <Route path="/" element={ <HomePage/> } />
              <Route path="*" element={ <PageNotFound/> } />
        </Routes>
    </div>
  )
}