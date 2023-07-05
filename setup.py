from typing import List

import setuptools
from setuptools import find_packages

with open("README.md", "r") as fh:
    long_description = fh.read()


def parse_requirements(file_name: str) -> List[str]:
    with open(file_name) as f:
        return [
            require.strip()
            for require in f
            if require.strip() and not require.startswith("#")
        ]


setuptools.setup(
    name="DB-GPT",
    packages=find_packages(),
    version="0.2.3",
    author="csunny",
    author_email="cfqcsunny@gmail.com",
    description="鲲言sql智能辅助系统是一款基于大模型的sql辅助系统，可以帮助提升运维效率，发现系统问题。"
    " 由于是私有化的系统，不会存在数据泄漏的问题",
    long_description=long_description,
    long_description_content_type="text/markdown",
    install_requires=parse_requirements("requirements.txt"),
    url="https://github.com/liushuchun/GPT-SQLboy",
    license="https://opensource.org/license/mit/",
    python_requires=">=3.10",
    entry_points={
        "console_scripts": [
            "dbgpt_server=pilot.server:webserver",
        ],
    },
)
