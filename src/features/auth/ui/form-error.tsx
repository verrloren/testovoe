'use client'

import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErrorProps {
	message?: string;
}

export function FormError({ message }: FormErrorProps) {

	if(!message) return null;

	return (
		<div className="bg-destructive/15 p-4 rounded-full flex items-center 
		gap-x-2 text-sm text-destructive">
			<ExclamationTriangleIcon className="h-4 w-4" />
			<p>{message}</p>
		</div>
	)
}
