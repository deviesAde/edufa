import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-black leading-tight text-gray-900 tracking-tight">
                    Pengaturan Profil
                </h2>
            }
        >
            <Head title="Profil" />

            <div className="space-y-6">
                <div className="bg-white p-8 shadow-sm shadow-gray-200/50 rounded-3xl border border-gray-100 overflow-hidden">
                    <div className="max-w-xl">
                        <UpdateProfileInformationForm
                            status={status}
                        />
                    </div>
                </div>

                <div className="bg-white p-8 shadow-sm shadow-gray-200/50 rounded-3xl border border-gray-100 overflow-hidden">
                    <div className="max-w-xl">
                        <UpdatePasswordForm />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
