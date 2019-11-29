# Bickit

# Authentication

At first, we will only use passport with google authentication.

The admin then maintains a list of allowed domain names for user creation.
 - blacklist ?
 - whitelist ?

# Admin User

The admin user is specified upon creation of the platform. It can promote another User to the admin role.

It can also list, search and browse all the existing buckets, their files and attributes.

This is all done from the admin section. The rest of the time, the admin user can use the platform
as a regular user as well.

# Users

The admin can do anything a user can do, plus
- browse the list of *all* the buckets of *all* the users
- delete a bucket of another user
- change site settings (when there will be)

The user can do anything the anonymous user can
- create a bucket
- delete a bucket
- give the link to any of his bucket
- browse the list of buckets associated with them and enter them

The anonymous user can
- comment on a folder, file or bucket (add a description ?)
- remove a folder in a bucket, even with contents in it
- create a folder in a bucket
- rename a folder
- move a folder to another folder
- upload a file to a folder (a bucket is a root folder)
- delete a file
- rename a file
- move a file to another folder in the bucket
- download a file

# Authenticated User
 - username
 - name
 - email
 - is_admin

---------------- structure -----------------

# Object
 - id
 - name
 - description
 - creation time
 - last modification time
 - last access time (last open time for folders and buckets, last download date for files)
 - number of accesses
 - type

# Bucket (Object)
 - users (as a link table)

# File (Object)
 - parent_id (a folder, or a bucket)

# Folder
 - parent_id (a folder, or a bucket)


------------------ roadmap for the future ----------------
General quotas
Per-user quotas
Quotas rules ?
Rate limiting in buckets / users ?