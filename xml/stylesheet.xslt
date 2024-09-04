<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Media Review Website</title>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
                    rel="stylesheet" />
            </head>
            <body class="bg-blue-200">

                <h1 class="text-3xl font-bold text-center mb-4">Media Review Website</h1>
                <h2 class="text-2xl font-semibold text-center mb-2">Movies</h2>
                <table class="w-full border-collapse mb-6">
                    <tr class="bg-red-500 text-white">
                        <th class="border border-black px-4 py-2">Title</th>
                        <th class="border border-black px-4 py-2">Release Date</th>
                        <th class="border border-black px-4 py-2">Genre</th>
                        <th class="border border-black px-4 py-2">Director</th>
                        <th class="border border-black px-4 py-2">Producer</th>
                        <th class="border border-black px-4 py-2">Writer</th>
                        <th class="border border-black px-4 py-2">Duration (min)</th>
                        <th class="border border-black px-4 py-2">Language</th>
                        <th class="border border-black px-4 py-2">Country</th>
                        <th class="border border-black px-4 py-2">Description</th>
                    </tr>
                    <xsl:for-each select="Media/Movies/Movie">
                        <tr class="bg-gray-700 text-white">
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Title" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="ReleaseDate" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Genre" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Director" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Producer" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Writer" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Duration" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Language" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Country" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Description" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>


                <h2 class="text-2xl font-semibold text-center mb-2">TV Shows</h2>
                <table class="w-full border-collapse mb-6">
                    <tr class="bg-red-500 text-white">
                        <th class="border border-black px-4 py-2">Title</th>
                        <th class="border border-black px-4 py-2">Start Date</th>
                        <th class="border border-black px-4 py-2">End Date</th>
                        <th class="border border-black px-4 py-2">Genre</th>
                        <th class="border border-black px-4 py-2">Creator</th>
                        <th class="border border-black px-4 py-2">Network</th>
                        <th class="border border-black px-4 py-2">Seasons</th>
                        <th class="border border-black px-4 py-2">Episodes</th>
                        <th class="border border-black px-4 py-2">Language</th>
                        <th class="border border-black px-4 py-2">Country</th>
                        <th class="border border-black px-4 py-2">Description</th>
                    </tr>
                    <xsl:for-each select="Media/TVShows/TVShow">
                        <tr class="bg-gray-700 text-white">
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Title" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="StartDate" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="EndDate" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Genre" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Creator" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Network" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Seasons" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Episodes" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Language" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Country" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Description" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>


                <h2 class="text-2xl font-semibold text-center mb-2">Actors</h2>
                <table class="w-full border-collapse mb-6">
                    <tr class="bg-red-500 text-white">
                        <th class="border border-black px-4 py-2">First Name</th>
                        <th class="border border-black px-4 py-2">Last Name</th>
                        <th class="border border-black px-4 py-2">Date of Birth</th>
                        <th class="border border-black px-4 py-2">Nationality</th>
                        <th class="border border-black px-4 py-2">Gender</th>
                        <th class="border border-black px-4 py-2">Biography</th>
                        <th class="border border-black px-4 py-2">Awards</th>
                        <th class="border border-black px-4 py-2">Website</th>
                    </tr>
                    <xsl:for-each select="Media/Actors/Actor">
                        <tr class="bg-gray-700 text-white">
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="FirstName" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="LastName" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="DateOfBirth" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Nationality" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Gender" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Biography" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Awards" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Website" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>


                <h2 class="text-2xl font-semibold text-center mb-2">Users</h2>
                <table class="w-full border-collapse mb-6">
                    <tr class="bg-red-500 text-white">
                        <th class="border border-black px-4 py-2">Username</th>
                        <th class="border border-black px-4 py-2">Email</th>
                        <th class="border border-black px-4 py-2">Date of Birth</th>
                        <th class="border border-black px-4 py-2">Gender</th>
                        <th class="border border-black px-4 py-2">Join Date</th>
                        <th class="border border-black px-4 py-2">Bio</th>
                        <th class="border border-black px-4 py-2">Socials</th>
                    </tr>
                    <xsl:for-each select="Media/Users/User">
                        <tr class="bg-gray-700 text-white">
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Username" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Email" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="DateOfBirth" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Gender" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="JoinDate" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Bio" />
                            </td>
                            <td class="border border-yellow-500 px-4 py-2">
                                <xsl:value-of select="Socials" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>