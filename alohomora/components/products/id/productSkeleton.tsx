import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Skeleton } from "@nextui-org/skeleton";

export default function ProductPageSkeleton() {
    return (
        <section className="flex flex-col mx-10 gap-4 py-8 md:py-10 overflow-hidden">
            {/* Breadcrumbs skeleton */}
            <div className="flex flex-col gap-4">
                <Breadcrumbs
                    aria-label="Breadcrumb"
                    separator="/"
                    size="lg"
                >
                    <BreadcrumbItem href="/products">Productos</BreadcrumbItem>
                    <BreadcrumbItem>
                        <Skeleton className="w-20 h-5 rounded" />
                    </BreadcrumbItem>
                </Breadcrumbs>
            </div>

            {/* Main content skeleton */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 items-center px-2">
                {/* Image carousel skeleton */}
                <div className="flex gap-4 items-center px-5 w-screen md:p-0 md:w-full">
                    <Skeleton className="w-full h-64 rounded" />
                </div>

                {/* Product details skeleton */}
                <div className="flex flex-col gap-4 md:p-5 md:mt-5 h-full">
                    <Skeleton className="h-8 w-3/4 rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-5/6 rounded" />
                    <Skeleton className="h-4 w-2/3 rounded" />
                    <Skeleton className="h-6 w-1/4 rounded mt-4" />
                    <Skeleton className="h-12 w-48 rounded-lg mt-2" />
                </div>
            </div>
        </section>
    );
}
