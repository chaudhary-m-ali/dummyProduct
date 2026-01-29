import { Link } from "react-router-dom";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadCrumbs({ items = [], className }) {
  return (
    <Breadcrumb className={`${className || ""}`}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            asChild
            className="text-[#A3A9C2] hover:text-[#3A4980]"
          >
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator className="text-[#A3A9C2]" />
            <BreadcrumbItem className="text-[#A3A9C2] hover:text-[#3A4980]">
              {item.link ? (
                <BreadcrumbLink asChild className="hover:text-[#3A4980]">
                  <Link to={item.link}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="text-[#3A4980] font-semibold">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
