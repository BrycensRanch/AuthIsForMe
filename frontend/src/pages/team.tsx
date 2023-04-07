import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

// I don't make mistakes, I'm not just like the rest of you.
// I'm stronger, I'm stronger, I'm smarter... I AM BETTER...  I AM BETTER!!!
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

export const getStaticProps: GetStaticProps = async (_context) => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      profilePictureURL: 'https://avatars.githubusercontent.com/u/117921904?v=4',
      bio: 'John is a software engineer at Acme Corp.',
      email: 'john@acme.com',
      commits: 100,
      linesOfCodeChanged: 100_000,
      URL: 'https://github.com/johndoe',
      contributions: ['Frontend', 'Backend', 'Design'],
      contributionLevel: 'Contributor'
    },
    {
      id: 2,
      profilePictureURL: 'https://avatars.githubusercontent.com/u/1818757?v=4',
      name: 'Jane Doe',
      bio: 'Jane is a software engineer at Acme Corp.',
      email: 'jane@acme.com',
      contributions: ['Frontend', 'Backend', 'Design', 'Documentation'],
      commits: 10,
      URL: 'https://github.com/janedoe',
      linesOfCodeChanged: 1000,
      contributionLevel: 'Owner'
    },
  ];

  return {
    props: {
      teamMembers,
    },
  };
};

const Team = ({ teamMembers }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  if (!teamMembers) {
    return <div>loading...</div>;
  }


  return (
	<Main
			meta={
				<Meta
					title="Your One-Stop Minecraft Account Solution"
					description="Easily link all your favorite services to your Minecraft/Mojang/Xbox Live account and streamline your online experience"
				/>
			}
		>
      <section className="w-screen bg-white dark:bg-gray-900">
				<main className="mx-auto max-w-7xl overflow-hidden rounded-lg px-4 py-6 shadow-lg ">
                <div className="container mx-auto my-12 px-4 md:px-12">
            {teamMembers.map((member: any) => (
              <>
    <div className="-mx-1 flex flex-wrap lg:-mx-4">
                    <div className="flex justify-end px-4 pt-4">
                      <p style={{
                        visibility: 'hidden',
                      }}>AMONGUS</p>
                  </div>
        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
<div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
    <div className="flex flex-col items-center pb-10">
                          <img className="my-3 h-24 w-24 rounded-full shadow-lg" src={member.profilePictureURL} alt={ `${member.name}'s GitHub Profile Picture`} id={`${member.id}-img`} />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white" id={ member.id}>{ member.name}</h5>
                          <span className="text-sm text-gray-500 dark:text-gray-400" id={`${member.id}-contributionLevel`}>{member.contributionLevel}</span>
                          <p id={`${member.id}-bio`} className="text-center font-satoshi font-bold italic">"{member.bio}"</p>
                            <p>Commits: {member.commits?.toLocaleString() || 'unknown'}</p>
                          <p>Lines of Code Changed: {member.linesOfCodeChanged?.toLocaleString() || 'unknown'}</p>
                          {
                            member.contributions?.length ? (
                              <>
                              <p className="italic">Contributions:</p>
                              {member.contributions?.map((contribution: any) => (
                                <span className="font-bold text-gray-500 dark:text-gray-400" key={`${member.id}-contribution-${contribution}`}>{contribution}</span>
                              ))}
                                </>
                            ) : undefined
                          }
        <div className="mt-4 flex space-x-3 md:mt-6">
                            <a href={member.URL} className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View { member.URL?.includes('github.com') ? 'GitHub' : 'Site' }</a>
                            {
                              member.email ? (
                                            <Link href={`mailto:${member.email}?subject=Let's%20chat!&body=Hey%2C%20I%20saw%20you%20in%20${AppConfig.site_name}'s%20Team%20page.%20Wanted%20to%20contact%20you%20regarding%2C%20x%2C%20y%2C%20and%20finally%2C%20z.`} className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">Email</Link>
                              )
                                : undefined
                            }
        </div>
    </div>
                    </div>
                  </div>
                </div>
                </>
      ))}
    </div>
				</main>
			</section>
		</Main>
  );
};

export default Team;