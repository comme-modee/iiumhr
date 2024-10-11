import { Route, Routes } from "react-router-dom";
import Main from "../page/Main";
import Intro from "../page/Intro";
import BusinessService from "../page/business/BusinessService";
import Advisory from "../page/business/Advisory";
import Payroll from "../page/business/Payroll";
import HR from "../page/business/HR";
import IR from "../page/business/IR";
import Education from "../page/business/Education";
import EmployeeService from "../page/employee/EmployeeService";
import Wages from "../page/employee/Wages";
import Dismissal from "../page/employee/Dismissal";
import Harassment from "../page/employee/Harassment";
import Injury from "../page/employee/Injury";

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/intro' element={<Intro />} />
            <Route path='/business'>
                <Route index element={<BusinessService />} />
                <Route path='advisory' element={<Advisory />} />
                <Route path='payroll' element={<Payroll />} />
                <Route path='hr' element={<HR />} />
                <Route path='ir' element={<IR />} />
                <Route path='edu' element={<Education />} />
            </Route>
            <Route path='/employee'>
                <Route index element={<EmployeeService />} />
                <Route path='wages' element={<Wages />} />
                <Route path='dismissal' element={<Dismissal />} />
                <Route path='harassment' element={<Harassment />} />
                <Route path='injury' element={<Injury />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;
