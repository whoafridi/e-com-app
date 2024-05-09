import React from 'react';

const DashboardTitle = ({ title, className }: { title: string; className?: string; }) => {
    return (
        <h2 className={`text-[28px] font-medium ${className}`}>{title}</h2>
    );
};

export default DashboardTitle;