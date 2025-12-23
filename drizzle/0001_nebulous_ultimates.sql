CREATE INDEX "waitlist_email_idx" ON "waitlist" USING btree ("email");--> statement-breakpoint
ALTER TABLE "waitlist" ADD CONSTRAINT "waitlist_email_unique" UNIQUE("email");