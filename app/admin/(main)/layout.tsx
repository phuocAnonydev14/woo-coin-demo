import { PropsWithChildren } from 'react';
import { SideBar } from '@/components/layouts/AdminLayout/SideBar';
import AdminHeader from '@/components/layouts/AdminLayout/Header';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <div className="min-h-screen w-max border-r border-neutral-200">
        <SideBar />
      </div>
      <div className="flex min-h-screen w-full flex-1 flex-col gap-2 bg-slate-100 p-4 px-6 py-4 md:gap-4">
        <AdminHeader />
        {children}
      </div>
    </div>
  );
}
