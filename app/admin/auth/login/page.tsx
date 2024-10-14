'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MailIcon } from '@/components/icons';
import Image from 'next/image';
import Logo from '@/components/assets/logo.png';
import { adminService } from '@/services/admin.service';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(50),
  password: z.string().min(6).max(100),
});
export default function AdminLoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const router = useRouter();

  const handleLogin = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await adminService.login(values);
      console.log('res', res);
      setCookie('access_token', res.data.token);
      router.push('/admin');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex w-full max-w-[500px] flex-col items-center justify-center gap-y-4 rounded-lg p-10 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] lg:w-[35dvw]">
        <div className="flex flex-col items-center gap-y-2 text-center">
          <Image src={Logo.src} alt="" width={Logo.width} height={Logo.height} objectFit="cover" />
          <p className="text-2xl font-semibold leading-8">Log in Wukoin Admin</p>
        </div>
        <div className="mb-2 h-[1px] w-full bg-neutral-200" />
        <div className="flex w-full flex-col">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        className="w-full p-3"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        className="w-full p-3"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                className="mt-3 flex w-full justify-center gap-x-1 p-3"
              >
                <MailIcon />
                Sign in
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
