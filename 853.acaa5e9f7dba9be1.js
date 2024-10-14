"use strict";(self.webpackChunktasks_manager_fe=self.webpackChunktasks_manager_fe||[]).push([[853],{8283:(C,E,t)=>{t.d(E,{j:()=>s});var o=t(2607),d=t(3953);let s=(()=>{class l extends o.N{createNote(r){return this.httpPostRequest("api/tasks",r)}getNotes(){return this.httpGetRequest("api/tasks")}deleteNote(r){return this.httpDeleteRequest(`api/tasks/${r}`)}updateNote(r){return this.httpPostRequest("api/tasks/update",r)}static{this.\u0275fac=(()=>{let r;return function(P){return(r||(r=d.xGo(l)))(P||l)}})()}static{this.\u0275prov=d.jDH({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})()},5958:(C,E,t)=>{t.d(E,{B:()=>e});var o=t(1635),d=t(3953),s=t(9959),l=t(5918),h=t(1880),r=t(8283),p=t(8141),P=t(8015);let e=class v{constructor(){this.notesService=(0,d.WQX)(r.j)}static notes(n){return n.notes}AddNote({patchState:n,getState:a},{payload:c}){n({notes:{...a().notes,model:[...a().notes.model,c]}})}DeleteNote({patchState:n,getState:a},{payload:c}){const u=a().notes,m=[...u.model];m.splice(c,1),n({notes:{...u,model:m}})}GetNotes({patchState:n}){return this.notesService.getNotes().pipe((0,p.M)(a=>n({notes:a})))}ResetNotes({patchState:n}){n({notes:P.y9})}UpdateNote({patchState:n,getState:a},{note:c,idx:u}){const m=a().notes,D=[...m.model];return D[u]=c,n({notes:{...m,model:D}}),this.notesService.updateNote(c)}static{this.\u0275fac=function(a){return new(a||v)}}static{this.\u0275prov=d.jDH({token:v,factory:v.\u0275fac})}};(0,o.Cg)([(0,s.rc)(h.Q.AddNote)],e.prototype,"AddNote",null),(0,o.Cg)([(0,s.rc)(h.Q.DeleteNote)],e.prototype,"DeleteNote",null),(0,o.Cg)([(0,s.rc)(h.Q.GetNotes)],e.prototype,"GetNotes",null),(0,o.Cg)([(0,s.rc)(h.Q.ResetNotes)],e.prototype,"ResetNotes",null),(0,o.Cg)([(0,s.rc)(h.Q.UpdateNote)],e.prototype,"UpdateNote",null),(0,o.Cg)([(0,s.MD)([e])],e,"notes",null),e=(0,o.Cg)([(0,s.Uw)({name:"notes",defaults:l.S})],e)},2853:(C,E,t)=>{t.r(E),t.d(E,{USER_ROUTES:()=>P});var o=t(7458),d=t(3694),s=t(3953);let l=(()=>{class e{static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=s.VBU({type:e,selectors:[["app-user-page"]],standalone:!0,features:[s.aNF],decls:1,vars:0,template:function(a,c){1&a&&s.nrm(0,"router-outlet")},dependencies:[d.n3],encapsulation:2,changeDetection:0})}}return e})();var h=t(9959),r=t(5958);const P=[{path:"",component:l,children:[{path:"",redirectTo:o.G.notes.routerPath,pathMatch:"full"},{path:o.G.notes.routerPath,loadComponent:()=>Promise.all([t.e(417),t.e(76),t.e(482)]).then(t.bind(t,3482)).then(e=>e.NotesPageComponent)},{path:o.G.reminders.routerPath,loadComponent:()=>t.e(879).then(t.bind(t,1879)).then(e=>e.RemindersPageComponent)},{path:o.G.archive.routerPath,loadComponent:()=>t.e(613).then(t.bind(t,2613)).then(e=>e.ArchivePageComponent)},{path:o.G.removed.routerPath,loadComponent:()=>t.e(241).then(t.bind(t,7241)).then(e=>e.RemovedPageComponent)}],providers:[(0,s.oKB)(h.rK.forFeature([r.B]))]}]}}]);