'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ArrowUpRight, Ellipsis, SearchIcon } from 'lucide-react';
import { Pagination, Post } from '@/types/app.type';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAuthorFromHtml, getSourceFromHtml, getSourceLinkFromHtml } from '@/lib/utils';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import { PostActionDropdown } from '@/app/admin/(main)/components/PostActionDropdown';
import { useEffect, useMemo, useState } from 'react';
import { DataTablePagination } from '@/components/common/DataPagination';
import { PostType } from '@/const/post.enum';
import { adminService } from '@/services/admin.service';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { useDebounceValue } from 'usehooks-ts';

interface PostDefaultManagementProps {
  initPost?: Post[];
  pagination?: Pagination;
}

const filterList = [
  {
    key: 'Draft',
    filter: PostType.DRAFT,
  },
  {
    key: 'Published',
    filter: PostType.PUBLISHED,
  },
  {
    key: 'Socials',
    filter: PostType.SOCIALS,
  },
  {
    key: 'Experts',
    filter: PostType.EXPERT,
  },
  {
    key: 'Schedule',
    filter: PostType.SCHEDULED,
  },
];

export const PostDefaultManagement = (props: PostDefaultManagementProps) => {
  const { initPost, pagination: initPagination } = props;
  const [pagination, setPagination] = useState<Pagination>(initPagination || ({} as Pagination));
  const [posts, setPosts] = useState<Post[]>(initPost || []);
  const [selectedType, setSelectedType] = useQueryState('type', {
    defaultValue: PostType.DRAFT,
  });
  const [debouncedValue, setValue] = useDebounceValue('', 500);
  const [columnVisibility, setColumnVisibility] = useState({});

  const handleRefetchPosts = async (page: number = 1) => {
    try {
      let filterVal = '';
      switch (selectedType) {
        case PostType.PUBLISHED: {
          filterVal = `status:published+tags:news`;
          break;
        }
        case PostType.DRAFT: {
          filterVal = `status:draft+tags:news`;
          break;
        }
        case PostType.EXPERT: {
          filterVal = `status:published+tags:expert`;
          break;
        }
        case PostType.SCHEDULED: {
          filterVal = `status:scheduled+tags:news`;
          break;
        }
        case PostType.SOCIALS: {
          filterVal = `status:published+tags:socials`;
          break;
        }
      }
      const res = await adminService.getAllPosts(page, 1, { filter: filterVal });
      setPosts(res.posts);
      res.meta.pagination && setPagination(res.meta.pagination);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleRefetchPosts().then();
    setValue('');
    if (selectedType === PostType.SOCIALS) {
      console.log('come');
      table.getAllLeafColumns()[2].getIsVisible() &&
        table.getAllLeafColumns()[2].getToggleVisibilityHandler();
    } else {
      if (!table.getAllLeafColumns()[2].getIsVisible())
        table.getAllLeafColumns()[2].getToggleVisibilityHandler();
    }
  }, [selectedType]);

  // useEffect(() => {
  //   setPosts(initPost || []);
  //   initPagination && setPagination(initPagination);
  // }, [initPost]);

  const filteredPost = useMemo(() => {
    return posts.filter((post) =>
      post.title.trim().toLowerCase().includes(debouncedValue.trim().toLowerCase()),
    );
  }, [debouncedValue]);

  const handleUpdatePosts = (id: string) => {
    try {
      const updatedPost = posts.filter((post) => {
        return post.id !== id;
      });
      setPosts(updatedPost);
    } catch (e) {
      console.log(e);
    }
  };

  const columns: ColumnDef<Post>[] = [
    {
      accessorKey: 'title',
      header: 'Title',
      cell: ({ row }) => {
        return <div className="max-w-sm">{row.original.title}</div>;
      },
      size: 10,
      maxSize: 10,
    },
    {
      accessorKey: 'excerpt',
      header: 'Excerpt',
      cell: ({ row }) => {
        return (
          <div
            style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
            className="max-w-[600px] overflow-hidden text-ellipsis break-words"
          >
            {row.original.excerpt}
          </div>
        );
      },
      size: 10,
      maxSize: 10,
      minSize: 10,
      enableResizing: false,
    },

    {
      header: 'Author',
      cell: ({ row }) => {
        const source = row.original.tags.find((tag) => tag.name === PostType.SOCIALS)
          ? getAuthorFromHtml(row.original.html || '')
          : getSourceFromHtml(row.original.html || '');
        return source;
      },
      enableHiding: true,
      size: 10,
      maxSize: 10,
    },
    {
      accessorKey: 'magazine',
      header: 'Source',
      cell: ({ row }) => {
        const sourceLink = getSourceLinkFromHtml(row.original.html || '');
        return (
          <Link href={sourceLink} target="_blank" className="flex items-center gap-1 underline">
            Navigate
            <ArrowUpRight size={18} />
          </Link>
        );
      },
    },
    {
      accessorKey: 'published_at',
      header: 'Published at',
      cell: ({ row }) => {
        return <div>{moment(row.original.published_at).fromNow()}</div>;
      },
    },
    {
      header: 'Action',
      cell: ({ row, table }) => {
        return (
          <div>
            <Button size="icon" variant="ghost">
              <PostActionDropdown
                post={row.original}
                reloadAction={(id) => {
                  handleUpdatePosts(id);
                }}
                selectedType={selectedType as PostType}
              >
                <Ellipsis size={20} />
              </PostActionDropdown>
            </Button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: debouncedValue ? filteredPost : posts || [],
    columns,
    state: {
      columnVisibility,
    },

    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    table.setPageSize(8);
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse justify-between gap-3 md:flex-row md:items-center">
        <Tabs
          defaultValue={selectedType}
          className="w-full"
          onValueChange={(value) => setSelectedType(value as PostType)}
        >
          <TabsList>
            {filterList.map((item) => (
              <TabsTrigger key={item.filter} value={item.filter}>
                {item.key}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="relative w-fit">
          <Input
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search by title..."
            className="bg-white pl-10"
          />
          <SearchIcon className="absolute left-2 top-[10%] text-gray-600" />
        </div>
      </div>
      <div className="mt-4 min-h-96 w-full rounded-lg border border-gray-200 bg-white p-4">
        <div>
          <p className="text-2xl font-bold">Post</p>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <DataTablePagination table={table} />
        </div>
      </div>
    </div>
  );
};

// title magazine excerpt created_at actions => [publish, remove, add to expert]

const PostDefaultTable = () => {
  return (
    <div>
      <p className="text-2xl font-bold">Post</p>
    </div>
  );
};
