"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SendIcon, Check, Mail } from "lucide-react";
import Link from "next/link";

type FormState = {
	email: string;
	title: string;
	description: string;
};

type Errors = Partial<FormState>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
	const [form, setForm] = useState<FormState>({
		email: "",
		title: "",
		description: "",
	});

	const [errors, setErrors] = useState<Errors>({});
	const [captchaToken, setCaptchaToken] = useState<string | null>(null);
	const [captchaError, setCaptchaError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const validate = (): boolean => {
		const newErrors: Errors = {};

		if (!EMAIL_REGEX.test(form.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (form.title.trim().length < 5) {
			newErrors.title = "Title must be at least 5 characters";
		}

		if (form.description.trim().length < 20) {
			newErrors.description = "Message must be at least 20 characters";
		}

		if (!captchaToken) {
			setCaptchaError("Please verify that you are not a robot.");
		} else {
			setCaptchaError(null);
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0 && !!captchaToken;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;

		setLoading(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...form,
					captchaToken,
				}),
			});

			if (res.ok) {
				setSuccess(true);
				setForm({ email: "", title: "", description: "" });
			}
		} finally {
			setLoading(false);
		}
	};

	if (success) return <SuccessState />;

	function Spinner() {
		return (
			<span className='inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
		);
	}

	const isDisabled = loading || !captchaToken;

	console.log(
		"=== CHECK RECAPTCHA KEY ===",
		process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
	);

	return (
		<form onSubmit={handleSubmit} className='space-y-6'>
			{/* Email */}
			<div>
				<label className='font-bold'>
					Email Address <span className='text-rose-500'>*</span>
				</label>
				<input
					type='email'
					className='form-input'
					value={form.email}
					placeholder='Enter your email address'
					onChange={(e) =>
						setForm({ ...form, email: e.target.value })
					}
				/>
				{errors.email && (
					<p className='text-red-500 text-sm'>{errors.email}</p>
				)}
			</div>

			{/* Title */}
			<div>
				<label className='font-bold'>
					What can we help you with?{" "}
					<span className='text-rose-500'>*</span>
				</label>
				<input
					type='text'
					className='form-input'
					value={form.title}
					placeholder='Describe your issue or suggestion here...'
					onChange={(e) =>
						setForm({ ...form, title: e.target.value })
					}
				/>
				{errors.title && (
					<p className='text-red-500 text-sm'>{errors.title}</p>
				)}
			</div>

			{/* Description */}
			<div>
				<label className='font-bold'>
					Your Message <span className='text-rose-500'>*</span>
				</label>
				<textarea
					rows={6}
					className='form-input'
					value={form.description}
					placeholder='Please describe your question or issue in detail...'
					onChange={(e) =>
						setForm({ ...form, description: e.target.value })
					}
				/>
				{errors.description && (
					<p className='text-red-500 text-sm'>{errors.description}</p>
				)}
			</div>

			{/* reCAPTCHA */}
			<div>
				<ReCAPTCHA
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
					onChange={(token) => setCaptchaToken(token)}
				/>
				{captchaError && (
					<p className='text-red-500 text-sm mt-2'>{captchaError}</p>
				)}
			</div>

			<button
				type='submit'
				disabled={isDisabled}
				className={`btn-primary text-white flex items-center justify-center gap-2 rounded-full py-4 px-10 font-bold transition
          ${isDisabled ? "opacity-60 cursor-not-allowed" : "hover:scale-[1.02]"}`}
			>
				{loading ? <Spinner /> : <SendIcon className='w-5 h-5' />}
				{loading ? "Sending..." : "Send Message"}
			</button>
		</form>
	);
}

function SuccessState() {
	return (
		<div className='relative overflow-hidden rounded-2xl border border-green-200 bg-linear-to-br from-green-50 to-white p-8 animate-fade-in'>
			<div className='flex items-start gap-4'>
				<div>
					<h3 className='text-lg font-bold text-green-900'>
						Message sent successfully
					</h3>
					<p className='mt-2 text-green-700 leading-relaxed'>
						Thanks for reaching out! We’ve received your message and
						sent you a confirmation email. Our team will respond
						shortly.
					</p>

					{/* CTA */}
					<div className='mt-5 flex flex-wrap gap-3'>
						<Link
							href='https://mail.google.com/mail/u/0/#inbox'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700 hover:scale-[1.02]'
						>
							<Mail className='w-4 h-4' />
							Open Gmail
						</Link>

						<span className='text-sm text-green-700 self-center'>
							Didn’t receive it? Check spam folder.
						</span>
					</div>
				</div>
			</div>

			{/* Decorative animation */}
			<span className='absolute -right-10 -top-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-40' />
		</div>
	);
}
