import { Routes } from '@angular/router';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { LayoutComponent } from './Frontend/layout/layout.component';
import { ProjectComponent } from './user/project/project.component';
import { SkillsComponent } from './user/skills/skills.component';
import { HomeComponent } from './Frontend/home/home.component';
import { DashboardLayoutComponent } from './Dasboard/dashboard-layout/dashboard-layout.component';
import { AuserComponent } from './Dasboard/auser/auser.component';
import { UuserComponent } from './Dasboard/uuser/uuser.component';
import { EducationComponent } from './Dasboard/education/education.component';
import { AddprojectComponent } from './Dasboard/addproject/addproject.component';
import { EducationshowComponent } from './user/educationshow/educationshow.component';
import { UpdateprojectComponent } from './Dasboard/updateproject/updateproject.component';
import { LoginComponent } from './user/login/login.component';
import { AEducationComponent } from './Dasboard/a-education/a-education.component';
import { AskillComponent } from './Dasboard/askill/askill.component';
import { UskillComponent } from './Dasboard/uskill/uskill.component';
import { ScontactComponent } from './Dasboard/scontact/scontact.component';
export const routes: Routes = [
    {path:'', component:LayoutComponent,children:[
               {path:'home',component:HomeComponent},

         {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'project',component:ProjectComponent},
     {path:'skills',component:SkillsComponent},
{path:"educations",component:EducationshowComponent},
{path:"project",component:ProjectComponent},
{path:"login",component:LoginComponent},
     {path:'',redirectTo:'home', pathMatch:'full'},

    ]},
    {path:'dashboard', component:DashboardLayoutComponent,children:[
        {path:'adduser',component:AuserComponent},
      {path:'updateuser',component:UuserComponent},
      {path:'Education',component:EducationComponent},
      {path:"addproject" , component:AddprojectComponent},
      {path:"updateproject" ,component:UpdateprojectComponent},
          {path:"aEducation" ,component:AEducationComponent},
           {path:"askill" ,component: AskillComponent},
    {path:"uskill" , component:UskillComponent},
    {path:"scontact" , component:ScontactComponent},






      // {path:"aEducation",component:AEducationComponent}
    ]},
    // {path:'**',component:NotFoundComponent}

];
